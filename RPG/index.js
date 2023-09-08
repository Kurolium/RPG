let i = 0
let n
let y = 0
let x = 0
let battle = "No"
let map = ""
let count = 0
let Name = ""
let Lv = 1
let HP,ATK,DEF
let MP = 0

const Feeld = {
    "1":"1111111111111221",
    "2":"1211111111112221",
    "3":"1111112111222222",
    "4":"1122211111222221",
    "5":"1111111111222111",
    "6":"1211111111111111",
    "7":"1111112111112221",
    "8":"1122211111111221",
    "9":"1111111111111122",
    "10":"1211111111221111",
    "11":"1111112111221111",
    "12":"1122211111212221"
}



const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろやゆよわんゃゅょっをぁぃぅぇぉ・？！ー゛゜"
const others = {"1":"゛","2":"゜","3":"もどる","4":"決定"}

function start() {
    document.getElementById('Start').remove()

    let title = document.createElement('h1')
    title.textContent = "名前を入力してください"
    document.getElementById('setting').appendChild(title)

    title = document.createElement('h1')
    title.textContent = "＊＊＊＊"
    title.setAttribute('id','NAME')
    document.getElementById('setting').appendChild(title)

    for (let i = 0; i < 6; i++) {
        for (let ia = 0; ia < 4; ia++) {
            title = document.createElement('button')
            title.textContent = hiragana[i * 5 + ia]
            title.setAttribute('id','NameButton')
            title.setAttribute('onclick',`edit(${i * 5 + ia})`)
            document.getElementById('setting').appendChild(title)    
            
        }
        
        title = document.createElement('button')
        title.textContent = hiragana[i * 5 + 5]
        title.setAttribute('id','NameButton')
        title.setAttribute('onclick',`edit(${i*5+5})`)
        title.style.marginRight = "10px"
        document.getElementById('setting').appendChild(title)   

        for (let ia = 0; ia < 5; ia++) {
            title = document.createElement('button')
            title.textContent = hiragana[i * 5 + ia + 25]
            title.setAttribute('onclick',`edit(${i * 5 + ia + 25})`)
            title.setAttribute('id','NameButton')
            document.getElementById('setting').appendChild(title)    
            
        }

        document.getElementById('setting').appendChild(document.createElement('br'))

    }

    for (let b = 0; b < 2 ; b++) {
        title = document.createElement('button')
        title.textContent = others[b+1]
        title.setAttribute('id','NameButton')
        title.setAttribute('onclick',`edit(${59+b})`)
        title.style.marginRight = "10px"
        document.getElementById('setting').appendChild(title)   

    }

    for (let b = 0; b < 2 ; b++) {
        title = document.createElement('button')
        title.textContent = others[b+3]
        title.setAttribute('id','some')
        title.setAttribute('onclick',`some(${b+1})`)
        title.style.marginRight = "10px"
        document.getElementById('setting').appendChild(title)   

    }


}

n = 0
function MAP() {
    map = ""
    document.getElementById('map').remove()
    const div = document.createElement('div')
    div.setAttribute('id','map')
    document.body.appendChild(div)

    for (let a = 1; a < 10; a++) {
        if (!Feeld[(y * -1) + a]) {
            for (let b = 0; b < 13; b++) {
                map += "0";   
            }
        } else {
            for (let b = 0; b < 13; b++) {
                if (!Feeld[(y * -1) + a][b + x]) {
                    map += "0"
                } else {
                    map += `${Feeld[(y * -1) + a][b + x]}` 
                }
            }
        }
    }

    i = 0
    for (let p = 0; p < 9; p++) {
    
        for (let q = 0; q < 13; q++) {
    
            let pop = document.createElement('img')
            if (p == 4 && q == 6) {
                pop.setAttribute('src',"C:\\Users\\yoshikaway\\Documents\\Code\\RPG\\Null.png")
            }else if (map[i] == "1") {
                pop.setAttribute('src',"C:\\Users\\yoshikaway\\Documents\\Code\\RPG\\plain.png")
            } else if (map[i] == "2") {
                pop.setAttribute('src',"C:\\Users\\yoshikaway\\Documents\\Code\\RPG\\water.png")
            } else if (map[i] == "0") {
                pop.setAttribute('src',"C:\\Users\\yoshikaway\\Documents\\Code\\RPG\\Null.png")
            }
            pop.setAttribute('id',`map${i}`)
            pop.style.width = "64px"
            pop.style.height = "64px"
            document.getElementById('map').appendChild(pop)
    
            i++
    
        }
    
        document.getElementById('map').appendChild(document.createElement('br'))
        n += 20
    }
}

document.addEventListener('keypress', keypress_ivent);

function keypress_ivent(e) {
    if (battle == "No") {
        if (e.key === "s") {
            if (map[71] !== "2" && map[71] !== "0" ) {
                y--
            }
        } else if (e.key === "w") {
            if (map[45] !== "2" && map[45] !== "0" ) {
                y++
            }
        }    if (e.key === "a") {
            if (map[57] !== "2" && map[57] !== "0" ) {
                x--
            }
        } else if (e.key === "d") {
            if (map[59] !== "2" && map[59] !== "0" ) {
                x++
            }
        }
    
        if (e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d") {
            if (map[58] == "1") {
                if (Math.floor(Math.random() * 25) + 1 == "1") {
                    Battle()
                }
            }

            MAP()
        }

        if (e.key === "Enter") {
            alert('A')
        }
    }

    
}

function Battle() {
    battle = "Yes"
    let Mob = document.createElement('img')
    if ("1" == "1") {
        alert('OK')
        Mob.setAttribute('src',"C:\\Users\\yoshikaway\\Documents\\Code\\RPG\\Devi.png")
        Mob.style.width = "256px"
    }

    document.getElementById('Mob').appendChild(Mob)

    document.getElementById('name').textContent = Name
    document.getElementById('Lv').textContent = `Lv. ${Lv}`
    document.getElementById('HP').textContent = `HP ${HP}`
    document.getElementById('MP').textContent = `MP ${MP}`
    
    const btl = document.getElementById("battle")
    const prf = document.getElementById("profile")
    const cmd = document.getElementById("command")
    btl.show();
    cmd.show()
    prf.show()
    btl.setAttribute("open", "true");
    cmd.setAttribute("open", "true");
    prf.setAttribute("open", "true");
       
};


function edit(e) {
    if (count < 4) {
        const about = document.getElementById('NAME').textContent
        document.getElementById('NAME').textContent = about.replace(`${about[count]}`,`${hiragana[e]}`)        
        count++
    }
}

function some(e) {
    if (e == "1") {
        const about = document.getElementById('NAME').textContent
        document.getElementById('NAME').textContent = about.replace(`${about[count-1]}`,'＊')
        count--
    } else if (e == "2") {
        if (document.getElementById('NAME').textContent == "＊＊＊＊") {
            Name = "あんです"
        } else {
            for (let n = 0; n < 4; n++) {
                let a = document.getElementById('NAME').textContent[n].replace('＊','') 
                Name = Name + a
            }

        };

        document.getElementById('setting').remove()
        HP = Math.floor(Math.random() * 5) + 5
        ATK = Math.floor(Math.random() * 5) + 5
        DEF = Math.floor(Math.random() * 5) + 5
        MAP()
    }

}