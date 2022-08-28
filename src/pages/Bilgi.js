import React from 'react'

function Bilgi() {
  return (
    <div>
      <img src="https://mryed.com/wp-content/uploads/2021/03/demirel-yunus-emre-gorsel.png" className='mx-auto d-block' alt=""></img>
      <h3 className='text-center border p-2'>Bilgilendirme</h3>
      <br></br>
      <p className='p-2'>
        <ul>
          <li>
          Proje <a href = "https://www.youtube.com/watch?v=lNfBlYAk3Lw&list=PLIHume2cwmHeydP0GkOzSxJHT1ph1BrWj">Yazılım Bilimi</a> youtube kanalındaki React eğitim videosu ile yapılmıştır.
          </li>
          <li>Daha fazlası için; <a href = "https://www.mryed.com">mryed.com</a> sitesini ziyaret edebilirsiniz.</li>
        </ul>
      </p>
    </div>
  )
}
export default Bilgi;
