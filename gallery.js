const whole = document.querySelector("body")
const images=document.querySelectorAll("img");
const lightbox = document.querySelector(".lightbox-gallery");
const closer = document.getElementById("svg");
const lftBtn = document.querySelector(".btn-left");
const rgtBtn = document.querySelector(".btn-right");
const changeImg = ["cities.jpg","cities1.jpg","cities2.jpg","cinema.jpg",
                   "cinema1.jpg","foods3.jpg","foods1.jpg","foods2.jpg"]
function handleLight()
 {
    images.forEach(image=>{

       image.addEventListener("click",()=>
        {
            lightbox.style.display="block"
            const img = document.createElement("img");
            img.src=image.src
            img.id="new-img"
            whole.appendChild(img)
            closer.style.display="block";
            lftBtn.style.display="block";
            rgtBtn.style.display="block";

        closer.addEventListener("click",()=>
        {
            lightbox.style.display="none"
            img.src="";
            whole.removeChild(img)
            closer.style.display="none";
            lftBtn.style.display="none";
            rgtBtn.style.display="none";

        }
    );

        lightbox.addEventListener("click",()=>
        {
            lightbox.style.display="none"
            whole.removeChild(img)
            closer.style.display="none";
            lftBtn.style.display="none";
            rgtBtn.style.display="none";
        }
    );
        let currentIndex=0;

        lftBtn.addEventListener("click",()=>
        {
            img.src=changeImg[currentIndex]
            prevImg(currentIndex)
        }
    );
function prevImg()
{
    currentIndex=(currentIndex -1 + changeImg.length ) % changeImg.length
}
    rgtBtn.addEventListener("click",()=>
    {
        img.src=changeImg[currentIndex]
        nextImg()
    }
);
function nextImg()
{
    currentIndex=(currentIndex +1) % changeImg.length;
}
                }
);   
            }

        )
    };
handleLight();

function filterCities(category)
{
    images.forEach(img=>
    {
      const getAtrbute = img.getAttribute("data-category")
        if(category ==="cities"|| getAtrbute=== category)
        {
            img.style.display = "block";
        }
        else
        {
            img.style.display="none";
        }
      }
    )   
};
function filterCinema(category)
{
    images.forEach(img=>
    {
        const getAtrbute = img.getAttribute("data-category")
        if(category ==="cities"|| getAtrbute=== category)
        {
            img.style.display = "block";
        }
        else
        {
            img.style.display="none";
        }
      }
    )   
};
function filterCities(category)
{
      images.forEach(img=>{
        const getAtrbute = img.getAttribute("data-category")
        if(category ==="cinema"|| getAtrbute=== category){
            img.style.display = "block";
        }
        else{
            img.style.display="none";
        }
       
      }
    )   
};
function filterFood(category)
{
    images.forEach(img=>
    {
       const getAtrbute = img.getAttribute("data-category")
        if(category ==="foods" || getAtrbute === category)
        {
            img.style.display = "block";
        }
        else
        {
            img.style.display="none";
        }
      }
    )   
};
function showAll(category)
{
    images.forEach(img=>
    {
       const getAtrbute = img.getAttribute("data-category")
        if(category ==="All" || getAtrbute === category)
        {
            img.style.display = "block";
        }
        else
        {
            img.style.display="none";
        }
      }
    )   
};
function handleBar()
{
  const checkBar = document.querySelector(".ham-back")
  const hamBar = document.querySelector(".bar")
    hamBar.addEventListener("click",()=>
    {
        checkBar.style.display="block";
    }
  )
};
function closeBar()
{
    const checkBar = document.querySelector(".ham-back")
    const hamBar = document.querySelector(".bar")
     hamBar.addEventListener("click",()=>
    {
        checkBar.style.display="none";
    }
  )
};
