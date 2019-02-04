node('slave') {
   def mvnHome
   stage('Preparation') { // for display purposes
      // Get some code from a GitHub repository
      git changelog: false,
      credentialsId: 'santhoshbonala',
      poll: false,
      //url: 'https://github.com/SanthoshBonala/ngquiz'
      //git credentialsId: '50ddcfff-74b7-40a3-8a89-fa774e660477',
      url: 'git@github.com:SanthoshBonala/ngquiz.git'
      // Get the Maven tool.
      // ** NOTE: This 'M3' Maven tool must be configured
      // **       in the global configuration.           
      mvnHome = tool 'M3'
   }
   stage('Build') {
      // Run the maven build
         sh "'${mvnHome}/bin/mvn' -Dmaven.test.failure.ignore clean package"
   }
}
