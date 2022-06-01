import React from 'react';

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
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#habilidade">Especialidade</a></li>
              <li><a href="#contactos">Contato</a></li>
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
                  <img src="../../assets/imagens/sobre.jpg" alt=""/>
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

  <section class="teams" id="servicos">
      <div class="max-width">
          <h2 class="title">Funcionário Competente só encontras aqui</h2>
         <div class="carousel owl-carousel ">
             <div class="card">
                 <div class="box">
                     <img src="../../assets/imagens/sobre.jpg" alt="WordPress"/>
                     <div className="text">WordPress</div>
                 </div>
             </div>
             <div class="card">
              <div class="box">
                  <img src="imagens/css3.png" alt="Css"/>
                  <div class="text">css</div>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src="imagens/js.jpg" alt="JavaScript"/>
                  <div class="text">JavaScript</div>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src="imagens/html.png" alt="html"/>
                  <div class="text">HTML</div>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src="imagens/sql.jpg" alt="SQL"/>
                  <div class="text">SQL</div>
              </div>
          </div>
         </div>
      </div>
  </section>

  <section className="skills" id="habilidade">
    <div className="max-width">
        <h2 className="title">Outras Especialidades</h2>
        <div className="skills-content">
            <div className="column left">
                <div className="text">Minhas outras Habilidades e Experiências</div>
                <p>"Uma máquina consegue fazer o trabalho de 50 homens ordinários. Nenhuma máquina consegue fazer o trabalho de um homem extraordinário." - Elbert Hubbard </p>
                <a href="#">Mais informações</a>
            </div>
            <div className="column right">
               <div className="bars">
                   <div className="info">
                       <span>Construct 2</span>
                       <span>30%</span>
                   </div>
                   <div className="line html"></div>
               </div>
               <div className="bars">
                <div className="info">
                    <span>Redes de Computador</span>
                    <span>50%</span>
                </div>
                <div className="line css"></div>
            </div>
            <div className="bars">
                <div className="info">
                    <span>Análise de Desenho e Sistema</span>
                    <span>67%</span>
                </div>
                <div className="line js"></div>
            </div>
            <div className="bars">
                <div className="info">
                    <span>Base de dados Relacional</span>
                    <span>70%</span>
                </div>
                <div className="line php"></div>
            </div>
            <div className="bars">
                <div className="info">
                    <span>Computação Gráfica</span>
                    <span>42%</span>
                </div>
                <div className="line mysql"></div>
            </div>
            </div>
        </div>
    </div>
</section> 

<section className="contact" id="contactos">
  <div className="max-width">
      <h2 className="title">Meus Contactos</h2>
      <div className="contact-content">
         <div className="column left">
             <div className="text">Fale Comigo</div>
             <p>Sou uma pessoa motivada com muita expectativa profissional. Tenho a experiência, o conhecimento e as habilidades para levá-lo adiante</p>
         
         <div className="icons">
             <div className="row">
                  <ion-icon name="person-outline"></ion-icon>
                  <div className="info">
                      <div className="head">Nome</div>
                      <div className="sub-title">Gilson Sebastião</div>
                  </div>
             </div>
             <div className="row">
              <ion-icon className="earth-outline"></ion-icon>
              <div className="info">
                  <div className="head">Endereço</div>
                  <div className="sub-title">Angola - Luanda/Maianga</div>
              </div>
         </div>
         <div className="row">
          <ion-icon name="person-outline"></ion-icon>
          <div className="info">
              <div className="head">Email</div>
              <div className="sub-title">gilpacsebastiao96@gmail.com</div>
          </div>
     </div>
         </div>
      </div>
      <div className="column rigth">
          <div className="text">Mensagem</div>
          <form action="#">
              <div className="fields">
                  <div className="field name">
                      <input type="text" placeholder="Nome" required/>
                  </div>
                  <div className="field email">
                      <input type="email" placeholder="Email" required/>
                  </div>
              </div>
              <div className="field">
                  <div className="field">
                      <input type="text" placeholder="Sobrenome" required/>
                  </div>
                  <div className="field textarea">
                     <textarea  cols="30" rows="10" placeholder="Escrever...." required></textarea>
                  </div>
                  <div className="button">
                      <button type="submit">Enviar</button>
                  </div>
              </div>
          </form>
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