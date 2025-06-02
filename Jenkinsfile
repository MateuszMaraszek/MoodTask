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
        //stage('Cleanup') {
            // steps {
            //     script {
            //         sh "docker stop ${DOCKER_IMAGE}  true"
            //         sh "docker rm ${DOCKER_IMAGE}  true"
            //     }
            //}
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




// nowa pipeline
// Powiadomienia przez Outlook (emailext)	0.5 pkt
// Możliwość wdrażania do różnych środowisk (DEPLOY_ENV)	0.25 pkt
// Pełny cykl życia aplikacji (checkout → build → deploy → notyfikacje)	0.25 pkt



// pipeline {
//     agent any

//     parameters {
//         choice(name: 'DEPLOY_ENV', choices: ['development', 'staging', 'production'], description: 'Wybierz środowisko docelowe')
//     }

//     environment {
//         NODE_ENV = "${params.DEPLOY_ENV}"
//         DOCKER_IMAGE = 'my-vite-app'
//         DOCKER_TAG = "${params.DEPLOY_ENV}"
//     }

//     tools {
//         nodejs 'NodeJS_18'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 checkout scm
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 sh 'npm ci'
//             }
//         }

//         stage('Lint') {
//             steps {
//                 sh 'npx eslint . --ext .ts,.tsx'
//             }
//         }

//         stage('Build') {
//             steps {
//                 sh 'npm run build'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
//             }
//         }

//         stage('Deploy to Environment') {
//             steps {
//                 script {
//                     echo "Wdrażanie aplikacji do środowiska: ${params.DEPLOY_ENV}"
//                     // Tu możesz dodać różne strategie zależne od środowiska:
//                     if (params.DEPLOY_ENV == 'production') {
//                         sh "docker run -d -p 80:80 --name ${DOCKER_IMAGE}-${DOCKER_TAG} ${DOCKER_IMAGE}:${DOCKER_TAG}"
//                     } else {
//                         sh "docker run -d -p 8080:80 --name ${DOCKER_IMAGE}-${DOCKER_TAG} ${DOCKER_IMAGE}:${DOCKER_TAG}"
//                     }
//                 }
//             }
//         }

//         stage('Cleanup') {
//             steps {
//                 sh "docker stop ${DOCKER_IMAGE}-${DOCKER_TAG} || true"
//                 sh "docker rm ${DOCKER_IMAGE}-${DOCKER_TAG} || true"
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Pipeline zakończony sukcesem.'
//             emailext(
//                 subject: "✅ Build Success: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                 body: """Wdrożenie do środowiska *${params.DEPLOY_ENV}* zakończone sukcesem.

// Build URL: ${env.BUILD_URL}
//                 """,
//                 to: "twoj_email@outlook.com"
//             )
//         }
//         failure {
//             echo 'Pipeline zakończony błędem.'
//             emailext(
//                 subject: "❌ Build Failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
//                 body: """Wystąpił błąd podczas wdrażania do środowiska *${params.DEPLOY_ENV}*.

// Sprawdź szczegóły: ${env.BUILD_URL}
//                 """,
//                 to: "twoj_email@outlook.com"
//             )
//         }
//         cleanup {
//             echo 'Czyszczenie zasobów.'
//         }
//     }
// }
