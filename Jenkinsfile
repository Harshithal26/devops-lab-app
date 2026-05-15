pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t devops-lab-app .'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker run -d -p 8081:80 --name devops-container devops-lab-app'
            }
        }
    }
}