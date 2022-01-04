pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              cleanWs()  
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
