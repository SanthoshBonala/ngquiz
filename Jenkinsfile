node('slave') {
   properties([
  pipelineTriggers([
   [$class: 'GenericTrigger',
    genericVariables: [
     [key: 'ref', value: '$.ref'],
     [
      key: 'before',
      value: '$.before',
      expressionType: 'JSONPath', //Optional, defaults to JSONPath
      regexpFilter: '', //Optional, defaults to empty string
      defaultValue: '' //Optional, defaults to empty string
     ]
    ],
    genericRequestVariables: [
     [key: 'requestWithNumber', regexpFilter: '[^0-9]'],
     [key: 'requestWithString', regexpFilter: '']
    ],
    genericHeaderVariables: [
     [key: 'headerWithNumber', regexpFilter: '[^0-9]'],
     [key: 'headerWithString', regexpFilter: '']
    ],
     
    causeString: 'Triggered on $ref',
    
    token: 'ngquiz',
    
    printContributedVariables: true,
    printPostContent: true,
    
    silentResponse: false,
    
    regexpFilterText: '$ref',
    regexpFilterExpression: 'refs/heads/master'
   ]
  ])
 ])

 stage("Getting Payload Parameters") {
  sh '''
  echo Variables from shell:
  echo ref $ref
  echo before $before
  echo requestWithNumber $requestWithNumber
  echo requestWithString $requestWithString
  echo headerWithNumber $headerWithNumber
  '''
 }
   def mvnHome
   
   stage('Preparation') { // for display purposes
    git credentialsId: '09eefd18-6e26-4f72-951a-a9c2eaa2dfa8',
        url: 'https://github.com/SanthoshBonala/ngquiz.git'   
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
   stage('install') {
      // Run the maven package
         sh "'${mvnHome}/bin/mvn' install"
   }
}
