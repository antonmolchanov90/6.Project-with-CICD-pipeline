pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              dir('/home/user/1.ANTON/Documents/1Work/1.QA/6.Project with CICD pipeline/3.apos-app') {
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('/home/user/1.ANTON/Documents/1Work/1.QA/6.Project with CICD pipeline/4.tests') {
                sh 'jest'
            }
          }
        }
    }
}
