pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
              cleanWs()  
              dir('/var/lib/jenkins/workspace/TestAnton@script/3.apos-app') {
              sh 'npm install'    
              sh 'npm run dev'
              }
            }
        }
        stage('Test') {
            steps {
                dir('/var/lib/jenkins/workspace/TestAnton@script/4.tests') {
                sh 'npm install'
                sh 'jest'
            }
          }
        }
    }
}
