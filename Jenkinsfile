node('slave') {
   def payload = readJSON text:"$payload"
   def mvnHome
   // testing lets hope this  
   stage('Preparation') {
      // Maven
      git credentialsId: '09eefd18-6e26-4f72-951a-a9c2eaa2dfa8',
      url: 'https://github.com/SanthoshBonala/ngquiz'
      mvnHome = tool 'M3'
   }

   stage('Compile') {
      // Run the maven compile
         sh "'${mvnHome}/bin/mvn' clean compile -P prod"
   }
   
   stage('Test') {
      // Run the maven test
         sh "'${mvnHome}/bin/mvn' test"
   }
   
   if ($payload == 'refs/heads/master') {
      stage('Package') {
         // Run the maven package
            sh "'${mvnHome}/bin/mvn' package -P prod"
      }

      stage('Install') {
         // Run the maven package
            sh "'${mvnHome}/bin/mvn' install -P prod"
      }

      stage('restart service'){
         sh "sudo service app restart"
      }
   }
}
