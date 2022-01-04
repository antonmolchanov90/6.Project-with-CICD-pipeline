pipeline {
    agent any
    stages {
        stage('Build') {
            steps { 
                dir('/var/lib/jenkins/workspace/TestAnton/3.apos-app') {
                sh 'npm install'    
                sh 'npm run dev'
                sh 'export JENKINS_NODE_COOKIE=KillMe'  
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
