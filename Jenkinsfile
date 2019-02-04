node('slave') {

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
         sh "'${mvnHome}/bin/mvn' clean compile"
   }
   
   stage('Test') {
      // Run the maven test
         sh "'${mvnHome}/bin/mvn' test"
   }
   
   stage('Package') {
      // Run the maven package
         sh "'${mvnHome}/bin/mvn' package"
   }

   stage('Install') {
      // Run the maven package
         sh "'${mvnHome}/bin/mvn' install"
   }
}
