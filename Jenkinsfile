pipeline {

   agent any


    environment {

        DOCKER_CRED = credentials('dockerhub-cred')

    }
    stages {

        stage('build') {

            steps {

                sh 'docker build -t bisratawoke/demoserver:v1 .'

            }

  

        }

        stage('login') {

            steps {

                sh 'echo $DOCKER_CRED_PSW | docker login -u DOCKER_CRED_USR --password-stdin'

            }


        }

        stage('deploy') {

            steps {

                sh 'docker push bisratawoke/demoserver:v1'

            }

        }


    }

   

}