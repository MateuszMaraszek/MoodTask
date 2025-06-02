pipeline {
    agent any

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

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        cleanup {
            echo 'Cleaning up any resources if needed.'
        }
    }
}
