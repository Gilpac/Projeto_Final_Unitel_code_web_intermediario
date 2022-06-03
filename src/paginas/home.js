import React from 'react';
import { useState } from 'react';
function MyButton() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button  type="submit" className="button" onClick={handleClick}>
        {count} Likes
      </button>
    );
  }

class Home extends React.Component{
    render(){
        return(
        <div>
            <div class="scroll-up-btn">
                <ion-icon name="chevron-up-outline"></ion-icon>
            </div>
            <div class="navbar">
                <div class="max-width">
                    < div class="logo"><a href="#">Contra<span>te-me</span></a></div>
            <ul class="menu">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#services">Aviso</a></li>
              <li><a href="#teams">Pessoas</a></li>
            </ul>
            <div class="menu-btn">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            </div>
            </div>

            <section className="home" id="inicio">
      <div className="max-width">
          <div className="home-content">
              <div className="text-1">Olá, seja bem-vindo ao</div>
              <div className="text-2">Recruta-me</div>
              <div className="text-3">Temos <span class="typing"></span></div>
              
          </div>
      </div>
  </section>

  <section className="about" id="sobre">
      <div className="max-width">
          <h2 className="title">Sobre</h2>
          <div className="about-content">
              <div className="column left">
                  <img src="../../sobre.jpg" alt=""/>
              </div>
              <div className="column right">
              
                  <p>Existimos para que tenham funcionários de excelência em vossa Companinha.
                  Sorte não, pois isso não existe. Existe muito trabalho, força, foco, fé e muita 
                  competência. Todos que pronunciam: "Seja feita a sua vontade, assim na Terra 
                  como no Céu" não podem acreditar em sorte (coisa do acaso). 
                  A competência é uma maneira de demonstrar confiança e responsabilidade a uma equipe de trabalho.
                  Aqui no Contate-me, temos funcionários que podem e irão dar um input a sua companhia.
                  Deia apenas uma oportunidade a estes.
                  </p>
                  
              </div>
          </div>
      </div>
  </section>

  <section class="services" id="services">
        <div class="max-width">
            <h2 class="title">Aviso Importante</h2>
            <div class="serv-content">
               <div class="card">
                   <div class="box">
                    <ion-icon name="brush-outline"></ion-icon>
                    <div class="text">Site em construção</div>
                    <p>Actualmente este site encontra-se em construção</p>
                   </div>
               </div>

               <div class="card">
                <div class="box">
                    <ion-icon name="trending-up-outline"></ion-icon>
                 <div class="text">Anúncios</div>
                 <p>Todos os dias poderás ver a publicação de pessoas que estão a procura de uma oportunidade de emprego </p>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <ion-icon name="code-outline"></ion-icon>
                 <div class="text">Novidades</div>
                 <p>Temos muitas novidades para os mostrar. Continue connosco...</p>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section class="teams" id="teams">
        <div class="max-width">
            <h2 class="title">Encontre aqui o seu Funcionário.</h2>
           <div class="carousel owl-carousel ">
               <div class="card">
                   <div class="box">
                       <img src="../../alfa.jpg" alt="Alfa" />
                       <div class="text">Ester Sebastião</div>
                       <p>- Licenciada em Psicologia do Trabalho. <br/> - Experiência na área: 3 anos.<br/>
                        - Estado: Trabalhando. <br/>
                        - Gmail: ester@gmail.com <br/>
                        - Telefone: 928 499 244.
                       </p>

                       <MyButton />
                   </div>
               </div>
               <div class="card">
                <div class="box">
                    <img src="../../nayol.jpg" alt="nayol"/>
                    <div class="text">Zélia Salvador</div>
                    <p>- Ensino Médio Concluido. <br/> - Curso: Construção Civil.<br/>
                        - Estado: Trabalhando. <br/>
                        - Gmail: ester@gmail.com <br/>
                        - Telefone: 928 499 244.</p>
                        <MyButton />
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="../../mama.jpg" alt=" Mama"/>
                    <div class="text">Mirokua Leitão</div>
                    <p>- Estudante. <br/> - Curso: Mecatronica.<br/>
                        - Estado: Trabalhando por conta própria. <br/>
                        - Gmail: ester@gmail.com <br/>
                        - Telefone: 928 499 244.
                        </p>
                        <MyButton />
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="../../marcio.jpg" alt=""/>
                    <div class="text">Márcio da Fonseca</div>
                    <p>
                    - Estudante. <br/> - Curso: Ciências da Computação.<br/>
                        - Profissão: Designer Gráfico. <br/>
                        - Gmail: ester@gmail.com <br/>
                        - Telefone: 928 499 244.
                    </p>
                    <MyButton />
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <img src="../../genio.jpg" alt=""/>
                    <div className="text">Eduardo Genio</div>
                    <p> - Estudante. <br/> - Curso: Ciências da Computação.<br/>
                        - Profissão: Designer Gráfico. <br/>
                        - Gmail: ester@gmail.com <br/>
                        - Telefone: 928 499 244.</p>
                        <MyButton />
                </div>
            </div>
           </div>
        </div>
    </section>


  


<footer>
      <span> <a href="#">Gilson_Sebastião</a> | Todos os direitos reservados 2022</span>
  </footer>
        </div>
        )
    }
}

export default Home;