pipeline {
    agent any

    environment {
        DOTNET_CLI_HOME = "/tmp/DOTNET_CLI_HOME"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Typescript') {
            agent {
                docker { image 'node:14-alpine' }
            }
            steps {
                dir("DotnetTemplate.Web/") {
                    sh "npm ci"
                    sh "npm run build"
                    sh "npm run lint"
                    sh "npm run test-cov"
                    publishCoverage adapters: [istanbulCoberturaAdapter(path: 'coverage/cobertura-coverage.xml', thresholds: [[failUnhealthy: true, thresholdTarget: 'Line', unhealthyThreshold: 30.0, unstableThreshold: 50.0]])], sourceFileResolver: sourceFiles('STORE_LAST_BUILD')
                }
            }
        }
        stage ('Dotnet') {
            agent {
                docker { image 'mcr.microsoft.com/dotnet/sdk:5.0' }
            }
            steps {
                sh "dotnet build"
                sh "dotnet test"
            }
        }
    }
}