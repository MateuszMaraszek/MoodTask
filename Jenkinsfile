pipeline {
    agent any
    
    parameters {
        string(name: 'DEPLOY_ENV', defaultValue: 'development', description: 'Deployment Environment')
    }
    
    environment {
        NODE_ENV = 'development'
        DOCKER_IMAGE = 'my-vite-app'
        DOCKER_TAG = 'latest'
    }

    tools {
        nodejs 'NodeJS_18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Lint') {
    steps {
        bat 'npx eslint "src/**/*.{ts,tsx}"'
    }
}

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        // stage('Docker Build') {
        //     steps {
        //         script {
        //             bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
        //         }
        //     }
        // }

        // stage('Docker Run') {
        //     steps {
        //         script {
        //             bat "docker run -d -p 8080:80 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}:${DOCKER_TAG}"
        //         }
        //     }
        // }

        // stage('Cleanup') {
        //     steps {
        //         script {
        //             bat "docker stop ${DOCKER_IMAGE} || exit 0"
        //             bat "docker rm ${DOCKER_IMAGE} || exit 0"
        //         }
        //     }
        // }
    }

    post {Add commentMore actions
        success {
            echo 'Pipeline zakończony sukcesem.'
            emailext(
                subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Wdrożenie do środowiska *${params.DEPLOY_ENV}* zakończone sukcesem.

            Build URL: ${env.BUILD_URL}
                """,
                to: "p.sokolowski.092@studms.ug.edu.pl"
            )
        }
        failure {
            echo 'Pipeline zakończony błędem.'
            emailext(
                subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """Wystąpił błąd podczas wdrażania do środowiska *${params.DEPLOY_ENV}*.

                Sprawdź szczegóły: ${env.BUILD_URL}
                """,
                to: "p.sokolowski.092@studms.ug.edu.pl"
            )
        }
        cleanup {
            echo 'Czyszczenie zasobów.'Add commentMore actions
        }
    }
    
}

