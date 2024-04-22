pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/SanduniManjula/4070-Manjula'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t sandunimanjula/app-4070:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerpassword', variable: 'test-dockerpassword')]) {
    // some block
   
               bat'docker login -u sandunimanjula -p ${sanduni}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push sandunimanjula/app-4070:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}