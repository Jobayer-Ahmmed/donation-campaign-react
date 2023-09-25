
const saveDonation=title=>{
    const storeDonation = getDonation()
    const exists = storeDonation.find(t=>t===title )
    if(!exists){
        storeDonation.push(title)
        const stringifiedDonation = JSON.stringify(storeDonation)
        localStorage.setItem("donation", stringifiedDonation)
    }

}

const getDonation=()=>{
    const getStorage = localStorage.getItem("donation")
    if(getStorage)
        return JSON.parse(getStorage)
    return []
}

export  {saveDonation, getDonation}