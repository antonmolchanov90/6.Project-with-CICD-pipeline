pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              cleanWs()  
              dir('/var/lib/jenkins/workspace/TestAnton@script/apos-app') {
              sh 'npm init'
              sh 'npm install'    
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('/var/lib/jenkins/workspace/TestAnton@script/tests') {
                sh 'jest'
            }
          }
        }
    }
}
