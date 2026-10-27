pipeline {
  agent any

  tools {
    maven 'Maven'
    jdk 'Java21'
  }

  stages {
    // me conecto al repo
    stage('Checkout'){
      steps {
        echo 'Clonando el repositorio...'
        git branch: 'practico-2-karate', url: 'https://github.com/catorceno/QA2.git'
      }
    }

    // ejecuto las pruebas
    stage('Build & Tests'){
      steps {
        echo 'Ejecutando pruebas Karate'
        bat 'mv test -Dkarate.options="--tags @Users"'
      }
    }

    // generar el reporte
    stage('Publicar Reporte'){
      steps {
        echo 'Publicando reporte HTML de Karate...'
        publishHTML([
          allowMissing: false,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'target/karate-reports',
          reportFiles: 'karate-summary.html',
          reportName: 'Reporte de Pruebas Karate'
        ])
      }
    }
  }

  post {
    // limpiar los reportes para que no se acumulen
    always {
      echo 'Pipeline finalizado — limpiando workspace.'
      cleanWs()
    }
    success {
      echo 'Pruebas Karate ejecutadas con éxito.'
    }
    failure {
      echo 'Falló alguna etapa del pipeline.'
    }
  }
}