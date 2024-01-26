pipeline {
    agent any

    tools {
        nodejs "yarn"
    }

    stages {
        stage('Git') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', url: 'https://github.com/DaniHi/ciCdPlayground.git'
            }
        }
        stage('Build') {
            steps {
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Test') {
            steps {
                sh 'yarn test'
                sh 'yarn test:e2e'
            }
            post {
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                    junit '**/reports/*.xml '
                }
            }
        }
    }
}
