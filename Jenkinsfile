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
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npx eslint . --ext .ts,.tsx'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // stage('Docker Build') {
        //     steps {
        //         script {
        //             sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
        //         }
        //     }
        // }

        // stage('Docker Run') {
        //     steps {
        //         script {
        //             sh "docker run -d -p 8080:80 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}:${DOCKER_TAG}"
        //         }
        //     }
        // }

        // Optional cleanup stage
        stage('Cleanup') {
            // steps {
            //     script {
            //         sh "docker stop ${DOCKER_IMAGE}  true"
            //         sh "docker rm ${DOCKER_IMAGE}  true"
            //     }
            //}
        }
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
