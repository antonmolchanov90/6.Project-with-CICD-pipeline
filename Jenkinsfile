pipeline {
    agent any
    stages {
        stage('Build') {
            steps { 
                dir('/var/lib/jenkins/workspace/TestAnton/3.apos-app') {
                sh 'npm install'    
                sh 'npm run dev'
                if (Listening at http://localhost:3000) {
                   autoCancelled = true
                   return  
              }
            }
        }
        stage('Test') {
            steps {
                dir('/var/lib/jenkins/workspace/TestAnton/4.tests') {
                sh 'npm install'
                sh 'jest'
                cleanWs()    
             }
           }
        }
    }
}
