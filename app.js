//---------update memory cost---------/////

function getMemoryCost(Memory) {
    let totalMemoryCost = document.getElementById('extraMem');
    if (Memory == '8gb') {
        totalMemoryCost.innerText = 0;
    } else if (Memory == '16gb') {
        totalMemoryCost.innerText = 180;
    }

    return totalMemoryCost;

}

//---------update storage cost-----//
function getStorageCost(Storage) {
    let totalStorageCost = document.getElementById('extraSto');
    if (Storage == '256gb') {
        totalStorageCost.innerText = 0;
    } else if (Storage == '512gb') {
        totalStorageCost.innerText = 100;
    } else if (Storage == '1tb') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;

}


//-------update delivery cost -----//

function updateDeliveryCost(DeliveryCharge) {
    let totalDeliveryCost = document.getElementById('deliveryChr');

    if (DeliveryCharge == 'primeMember') {
        totalDeliveryCost.innerText = 0;

    } else if (DeliveryCharge == 'regularMember') {
        totalDeliveryCost.innerText = 20;
    }

    return totalDeliveryCost;

}


//----calculate total cost-----///
function calculate(memory, storage, deliverycharge, promo) {

    let memoryCost = getMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = getStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);



    let currentBalance = document.getElementById('bestPrice').innerText;
    let totalBalance = document.getElementById('totalCost');
    totalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);


    let netCost = document.getElementById('netTotal');
    netCost.innerText = totalBalance.innerText;

    promo = document.getElementById('promo').value;
    if (promo == 'stevekaku') {
        const PromoCost = (parseFloat(totalBalance.innerText) * .8);
        netCost.innerText = PromoCost;

    }
    else {

        document.getElementById("promo").setAttribute('class', "text-base border-2 border-red-600 rounded w-1/4 mb-1 text-center");



    }


}



//-----update memory cost ------//
document.getElementById('16gbMemory').addEventListener('click', function () {

    document.getElementById('8gbMemory').disabled = false;
    document.getElementById('8gbMemory').setAttribute('class', 'border-2 border-gray-500 rounded p-2');

    getMemoryCost('16gb');

    calculate('16gb');
    document.getElementById('16gbMemory').disabled = true;
    document.getElementById('16gbMemory').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')



});
document.getElementById('8gbMemory').addEventListener('click', function () {
    document.getElementById('16gbMemory').disabled = false;
    document.getElementById('16gbMemory').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    getMemoryCost('8gb');
    calculate('8gb');
    document.getElementById('8gbMemory').disabled = true;
    document.getElementById('8gbMemory').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});


//------------update Storage Cost ----------//
document.getElementById('256gbStorage').addEventListener('click', function () {
    document.getElementById('512gbStorage').disabled = false;
    document.getElementById('512gbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    document.getElementById('1tbStorage').disabled = false;
    document.getElementById('1tbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');

    getStorageCost('256gb');
    calculate('256gb');
    document.getElementById('256gbStorage').disabled = true;
    document.getElementById('256gbStorage').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});
document.getElementById('512gbStorage').addEventListener('click', function () {

    document.getElementById('256gbStorage').disabled = false;
    document.getElementById('256gbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    document.getElementById('1tbStorage').disabled = false;
    document.getElementById('1tbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    getStorageCost('512gb');
    calculate('512gb');
    document.getElementById('512gbStorage').disabled = true;
    document.getElementById('512gbStorage').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});
document.getElementById('1tbStorage').addEventListener('click', function () {

    document.getElementById('512gbStorage').disabled = false;
    document.getElementById('512gbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    document.getElementById('256gbStorage').disabled = false;
    document.getElementById('256gbStorage').setAttribute('class', 'border-2 border-gray-500 rounded p-2');
    getStorageCost('1tb');
    calculate('1tb');
    document.getElementById('1tbStorage').disabled = true;
    document.getElementById('1tbStorage').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});
//------update delivery cost------///
document.getElementById('prime').addEventListener('click', function () {
    document.getElementById('nonprime').disabled = false;
    document.getElementById('nonprime').setAttribute('class', 'border-2 border-gray-500 rounded p-2');

    updateDeliveryCost('primeMember');
    calculate('primeMember');

    document.getElementById('prime').disabled = true;
    document.getElementById('prime').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});
document.getElementById('nonprime').addEventListener('click', function () {
    document.getElementById('prime').disabled = false;
    document.getElementById('prime').setAttribute('class', 'border-2 border-gray-500 rounded p-2');

    updateDeliveryCost('regularMember');
    calculate('regularMember');

    document.getElementById('nonprime').disabled = true;
    document.getElementById('nonprime').setAttribute('class', 'bg-gray-200 border-2 border-gray-500 rounded p-2 ')


});

document.getElementById('promoButton').addEventListener('click', function () {

    calculate('stevekaku');
    document.getElementById('promo').value = '';
});