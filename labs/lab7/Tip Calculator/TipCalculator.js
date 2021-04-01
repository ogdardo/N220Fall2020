let txtBill = document.getElementById("txtBill");

function calculateTotal() {
            let numberInput = Number(txtBill.value);
            let tip = (numberInput * 0.15);
            let total = (tip + numberInput);
            console.log("Tip: " + tip + ". " + "Total: " + total);    
}