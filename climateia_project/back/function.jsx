

const handleFileSubmit = () => {

    const { selectedComarcaId, selectedYear } = this.state;
    const selectedComarca = mapData.features.find(
      (comarca) => comarca.properties.cartodb_id === selectedComarcaId
    );
  
    if (selectedComarca) {
      console.log(
        "Comarca seleccionada:",
        selectedComarca.properties.nom_comar
      );
      console.log("Periodo seleccionado:", selectedYear);
            this.pythonConnect(selectedComarcaId, selectedYear);
      this.setState({ showError: false, showMap: true });
      this.props.setShowInfo(false); // Actualizamos el estado showInfo del componente DefaultPrediction
    } else {
      this.setState({ showError: true, showMap: false });
    }
  
    const selectedFile = 'src/public/assets/dh_' + comarca + '.json'
      const url = 'http://localhost:5000/calculate_SPI/'+selectedFile+'/'+prediction;
      fetch(url, {
        method: 'GET',
        // body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result); // Mensaje de respuesta del servidor
        })
        .catch((error) => {
          console.error('Error al enviar el archivo:', error);
        });
    };
  