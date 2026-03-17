window.onload = goFetch;
  async function goFetch(){
  try {
        let response = await fetch('../files/tests.json');
        let data = await response.json();
  }
  catch(err) { 
      console.log(err)
  }
}