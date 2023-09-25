
const saveDonation=title=>{
    const storeDonation = getDonation()
    storeDonation.push(title)
    const stringifiedDonation = JSON.stringify(storeDonation)
    localStorage.setItem("donation", stringifiedDonation)
}

const getDonation=()=>{
    const getStorage = localStorage.getItem("donation")
    if(getStorage)
        return JSON.parse(getStorage)
    return []
}

export  {saveDonation, getDonation}