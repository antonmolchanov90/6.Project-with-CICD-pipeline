pipeline {
    agent any
    stages {
        delete()
        stage('Build') {
            steps {
              dir('./apos-app') {
              sh 'npm install'    
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('./tests') {
                sh 'jest'
            }
          }
        }
    }
}
