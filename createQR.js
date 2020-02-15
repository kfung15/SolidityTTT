function contractAddress() {
  console.log(TTTContract.options.address);
}

async function QRgen() {
  let contractAddress = await TTTContract.options.address;
  console.log("this is address", contractAddress);
  let contractAddressStatus = document.getElementById("contractAddress");

  contractAddressStatus.innerHTML = ("Game Contract ID: ").concat(contractAddress);
  console.log("new address", contractAddressStatus.innerHTML);

  // create QR code after contract is deplyed
  base_url = "http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=";
  second_url = base_url + contractAddress;
  third_url = second_url + "&chld=H|0";

  var img = document.getElementById("QRPic");
  img.src = third_url.replace("90x90", "300x300");
  img.style.display = "block";

  console.log(third_url);
}
