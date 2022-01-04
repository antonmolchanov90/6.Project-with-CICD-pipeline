pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              dir('./3.apos-app') {
              sh 'npm install'    
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('./4.tests') {
                sh 'jest'
            }
          }
        }
    }
}
