node('slave') {

   def mvnHome
   
   stage('Preparation') {
      // Maven
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
