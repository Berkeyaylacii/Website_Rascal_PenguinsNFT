const mobileMenuBtn = document.querySelector("button.mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

const connectButton = document.getElementById("connectButton");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

connectButton.addEventListener("click", () => {
    window.alert("Will be active soon...")
});

const getWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(window.ethereum)

        try{
            await window.ethereum.request({ method: "eth_requestAccounts"} )
            resolve(web3)
        } catch(error){
            reject(error)
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("").addEventListener("click", async ({ target }) => {
        const web3 = await getWeb3()
        const walletAddress = await web3.eth.requestAccounts()
        const walletBalanceInWei = await web3.eth.getBalance(walletAddress[0])
        const walletBalanceInEth = Math.round(web3.utils.fromWei(walletBalanceInWei) * 10000) / 10000

      target.setAttribute("hidden", "hidden")

        document.getElementById("wallet_address").innerText = walletAddress;
        document.getElementById("wallet_balance").innerText = walletBalanceInEth;
        document.getElementById("wallet_info").removeAttribute("hidden");
    })
})


windows.addEventListener('DOMContentLoaded', () =>{
    const overlay = document.querySelector('#overlay')
    const fishingGameText = document.querySelector('#fishingGamePopup')

    fishingGameText.addEventListener('click', () =>{
        overlay.classList.remove('hidden')
        overlay.classList.add('flex')
    })
    
})