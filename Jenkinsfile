node('slave') {
   def mvnHome
   stage('Getting Payload Parameters') {
      // Run the maven build
       sh "echo $payload"   
   }
   
   stage('Preparation') { // for display purposes
    git credentialsId: '09eefd18-6e26-4f72-951a-a9c2eaa2dfa8',
        url: 'https://github.com/SanthoshBonala/ngquiz.git'   
      mvnHome = tool 'M3'
   }
   stage('Build') {
      // Run the maven build
         sh "'${mvnHome}/bin/mvn' -Dmaven.test.failure.ignore clean package"
   }
}
