pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              dir('./6.Project with CICD pipeline/3.apos-app') {
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('./6.Project with CICD pipeline/4.tests') {
                sh 'jest'
            }
          }
        }
    }
}
