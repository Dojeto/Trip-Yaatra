"use client";
import React, { useState } from "react";

const ReadMoreContent = () => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const toggleContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" p-2 w-[1200px] m-8 shadow-lg rounded-md xs:m-4">
        <h2 className=" border-highlight border-l-4 ml-3 pl-3 m-2 font-bold text-darkbl text-3xl xs:text-xl">
          About India Tours
        </h2>
        <div
          className={` ${
            isContentExpanded ? "" : "max-h-[90px] overflow-hidden"
          } `}
        >
          <p className=" m-4 xs:text-sm">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A fuga
            beatae rerum modi ea, saepe cum molestias tempora quo aliquid
            suscipit aperiam alias facilis in cupiditate atque dolores labore
            assumenda omnis laudantium! Eos accusamus minima quo aspernatur?
            Vero nesciunt nobis dolores commodi? Nemo id maxime nam deleniti
            aliquam! Necessitatibus aperiam distinctio ut nisi laborum.
            Repellendus fugiat magnam quidem mollitia sunt quibusdam vel facilis
            nemo blanditiis consequatur. Officiis velit esse ex odio nihil
            magnam aperiam voluptates impedit voluptas dolore, obcaecati at est
            illo tenetur repellat quisquam doloremque dolorum id! Et, neque
            quia! Accusantium corporis error quae, consequatur voluptatum nam
            odio dicta adipisci harum officia, iure earum veritatis dolorem qui
            laborum quis. Possimus magni assumenda doloremque quis incidunt
            neque necessitatibus quae quibusdam? Voluptatem aut repudiandae ab
            deleniti explicabo eos necessitatibus delectus repellat reiciendis
            natus architecto veniam vel possimus consequuntur voluptas non nobis
            harum, adipisci quasi maxime tempore. Animi, nulla a quo expedita
            quae voluptatibus, repudiandae exercitationem sit dolore officiis,
            quod dignissimos reiciendis! Dicta assumenda ex rem officiis. Ad,
            laudantium eum! Laboriosam, eaque rerum officia impedit voluptatem
            provident ea optio odio velit fugiat? Expedita quis pariatur ad
            cupiditate maxime iste doloribus architecto eveniet amet, ea
            repudiandae sequi eum sapiente similique fugit porro magni iusto
            necessitatibus velit repellat vitae. Sequi possimus veritatis quia
            harum dolorum cupiditate rem, distinctio hic? Reiciendis enim quasi
            tempora eveniet cupiditate ratione. Fugiat expedita qui quas et
            blanditiis maxime aspernatur id. Ea rem, odit quod, ab aliquam
            veritatis laboriosam facilis dolorem accusantium voluptas corporis
            quidem amet obcaecati blanditiis. Quos, inventore rem accusantium
            soluta eius hic quidem molestiae consequuntur aliquid sunt dolor
            repellat enim, velit mollitia, quae veniam quod nemo. Nostrum
            aliquam repellat assumenda eius illo. Vitae dolorum illo odio
            aliquid eligendi iure maiores quasi veniam ab quidem, repellendus
            sed perferendis doloremque dignissimos voluptatem ea totam officia
            magni quo natus saepe aliquam mollitia? Est quisquam dicta, magni
            fuga expedita laborum saepe pariatur ipsam perspiciatis iure eveniet
            molestias molestiae beatae, a, minus dolorum temporibus corporis
            corrupti quidem praesentium! Reiciendis, quae deserunt blanditiis
            nulla repudiandae deleniti dolorem tempora itaque aspernatur ratione
            sunt excepturi at rem, quo dignissimos minus esse in, veritatis quod
            laudantium. Voluptatum aliquid voluptatem sapiente minima quasi
            animi saepe, iusto facilis temporibus minus fugiat omnis illum
            expedita laborum consectetur possimus nulla deserunt, rem sint
            obcaecati quisquam magni inventore. Numquam at facere eligendi
            ducimus molestias, nisi repellendus culpa autem quo quasi tenetur,
            amet ipsam iusto voluptate dicta laboriosam eum eaque voluptatum
            quam, tempora assumenda incidunt. Iusto odio, recusandae beatae
            nulla necessitatibus quas quis molestias incidunt et, deleniti
            numquam voluptatem exercitationem assumenda eligendi alias nobis
            similique ducimus impedit natus. Expedita temporibus eius, deleniti
            nam sed consectetur ipsa minima? Veritatis eligendi assumenda rerum
            soluta natus ipsum laboriosam aperiam perferendis quos fuga ullam
            tempore eos reiciendis vitae commodi, laudantium quaerat suscipit
            quisquam ut. Adipisci eum ipsum commodi ad fugiat quisquam ut
            officia placeat laudantium asperiores error facilis, nemo obcaecati
            perspiciatis nostrum porro exercitationem iusto? Ut tempora fugiat
            cumque ex consequuntur? Eaque eos quibusdam at illum maxime
            praesentium nesciunt nam magnam corporis laboriosam. Repellendus
            commodi a itaque facilis magni. Animi reprehenderit quisquam velit
            soluta blanditiis iure perspiciatis voluptatum unde odio, in ad
            aliquam praesentium alias at ratione. Voluptas, totam tempora
            eveniet culpa amet non eum earum itaque pariatur recusandae, et
            soluta suscipit hic quo. Cum nostrum fugiat quis laudantium
            repudiandae deserunt quisquam delectus tempore magni, maxime
            perferendis obcaecati ipsum? Nam totam laboriosam itaque laborum.
            Esse ab recusandae veniam consequatur a molestiae, id, natus
            veritatis fugiat dicta est cumque autem perferendis, accusamus
            magnam saepe suscipit. In, repellat perspiciatis laboriosam
            consectetur velit quidem modi suscipit aperiam molestiae. Aliquam,
            itaque totam obcaecati numquam sit voluptate praesentium error unde
            possimus nisi nihil ad facere sunt quod mollitia deserunt, commodi
            vero sequi repellat recusandae repellendus. Maiores ipsa eos quae
            assumenda qui. Quis, dolorum tempore quaerat labore aliquam sunt
            dolorem error fugit harum ullam provident architecto dolore dolor
            quae, atque numquam molestiae porro libero facilis quasi illo
            obcaecati ea veritatis. Quo omnis impedit praesentium! Nihil rem
            quidem cupiditate possimus tenetur ducimus nobis quae modi enim
            repellendus sint, ratione molestiae blanditiis. Sunt quaerat
            obcaecati quas iusto consectetur quia nam, accusantium quam, labore
            sequi hic commodi voluptatibus cum numquam ducimus deserunt, ipsam
            ipsa aliquid dolorem suscipit aut? Quibusdam maxime rem quod
            laudantium fugit ullam tenetur itaque, molestias corporis, excepturi
            vitae incidunt. Sit, ducimus ipsum harum, dignissimos asperiores at
            adipisci blanditiis reprehenderit incidunt inventore possimus?
            Laborum ipsam voluptas et in aperiam magni. Omnis soluta
            reprehenderit harum laudantium eos exercitationem magni voluptatem
            provident, facilis, asperiores veritatis atque nostrum quidem
            necessitatibus voluptas unde expedita sunt eius ullam molestiae
            optio ea! Corrupti tenetur soluta perferendis itaque. Voluptates
            possimus ipsum odit saepe itaque fuga eligendi consectetur nam,
            dolores autem quisquam soluta ipsam voluptas dolor, porro ab
            similique illo ullam! Consequatur asperiores est enim veniam iure
            esse nam consectetur ut porro, delectus veritatis unde obcaecati aut
            harum. Aspernatur magnam amet illo, ipsum eveniet accusantium
            veritatis voluptatem pariatur odit, ad ipsa quod expedita ab
            deleniti natus vero. Quaerat, tenetur cum hic sed quam consectetur
            accusamus facilis, pariatur nemo optio explicabo amet in reiciendis
            corporis iure excepturi non. Eos architecto magnam, accusantium
            perferendis corporis vel molestiae id velit doloribus dolores
            explicabo reprehenderit maiores est dicta quam. Incidunt ipsam
            illum, enim delectus quasi ad doloremque deleniti libero porro
            repellat atque et? Assumenda laborum maiores cumque ipsa repellendus
            debitis sit perspiciatis, autem laboriosam? Facilis amet obcaecati
            aperiam. Ut quos sed voluptatum, natus ratione pariatur placeat
            possimus similique, autem maiores nisi repudiandae iste, obcaecati
            unde earum reprehenderit rem nemo iusto hic facilis. Culpa magni
            beatae totam at est, animi quas error doloremque ea, atque
            voluptates aliquid eveniet vitae odio possimus, reiciendis
            voluptatibus! Magnam esse praesentium cum mollitia tenetur sequi,
            saepe, perferendis dolores in consequuntur nulla, placeat magni
            debitis similique odit totam! Quo voluptatibus soluta ad facere aut
            nobis reiciendis, autem impedit, deserunt alias quam quisquam minima
            eaque repellendus? Placeat adipisci harum vero tenetur officia,
            ipsum laborum omnis praesentium magnam. Mollitia molestiae, saepe
            dolore corporis quidem maiores consectetur explicabo consequatur
            pariatur vero soluta officiis veritatis temporibus vitae nostrum
            laudantium sequi optio aperiam dignissimos iste autem! Nemo mollitia
            temporibus odio, veritatis ex repudiandae explicabo accusamus
            suscipit praesentium dolor sapiente molestiae voluptatem. Illo
            voluptatibus tempora doloremque maiores nesciunt unde quod incidunt
            quaerat, corrupti reiciendis totam quisquam eveniet nam possimus,
            quas alias fuga rem iure ipsum aliquam velit? Facilis, odio
            repudiandae omnis unde dignissimos ipsum? Ea, eveniet voluptatibus
            fuga fugit reiciendis ut, cum officia quisquam ad quam inventore,
            vel eaque ullam deleniti minima dolore magnam culpa nesciunt ipsum
            dolores aliquam. Molestias, libero? Tenetur ducimus adipisci, eius
            tempora architecto ratione unde molestiae. Ipsum eum tempora,
            deserunt corrupti quidem porro soluta blanditiis fugit consequuntur
            voluptatem maxime iste quam vitae possimus commodi expedita quia
            ipsa adipisci deleniti voluptate est autem! Perspiciatis velit
            excepturi tempore ullam quam. Deserunt ratione eaque dignissimos quo
            architecto esse fuga? Velit qui nam eum consequatur dolorem nihil
            sint assumenda, delectus sequi nesciunt nemo, harum consequuntur
            cupiditate numquam at doloribus tempora quasi, eaque similique
            magnam laborum ipsam rem nisi? Hic, expedita nisi doloribus
            explicabo alias quae amet similique nulla culpa nihil odio quis
            dignissimos quibusdam, quos soluta dolorum, autem eaque laboriosam
            sint? Maiores, natus iste velit rem id ad excepturi accusamus
            cupiditate asperiores distinctio culpa deleniti saepe quas! Qui
            quisquam, quos modi corrupti id ipsam repellendus itaque esse dolore
            quidem quas. Quisquam labore fugit nihil dolor provident nobis
            laboriosam eos numquam, ipsa at tenetur commodi optio vero maxime
            porro libero aperiam quas blanditiis sequi aspernatur vitae
            exercitationem repudiandae quibusdam! Magni ratione neque odit
            dolorem provident accusamus. Non architecto itaque nesciunt ut
            ratione temporibus iure beatae at et voluptas. Nesciunt rem impedit,
            ut optio perspiciatis natus! Alias eligendi, iure culpa, sunt cumque
            libero obcaecati laborum soluta nam ratione dolore molestiae nostrum
            voluptas qui. Libero facere reprehenderit optio cumque temporibus
            alias, quidem sapiente quas cupiditate fugit repudiandae, explicabo
            et quisquam enim qui culpa, voluptate sed facilis voluptates quam
            autem nobis a? Nisi sed, soluta nesciunt accusamus ullam tempore
            perferendis temporibus nemo unde nostrum quia reprehenderit quod
            consectetur quaerat, distinctio, sapiente incidunt illo esse beatae!
            Veritatis molestias dolore perspiciatis. Ad repellat dolores
            cupiditate esse explicabo, ex veritatis modi debitis nam doloremque
            itaque dolorem quae eum voluptates recusandae id asperiores maxime
            possimus provident quam magni nulla. Quas eos totam quaerat minima,
            perspiciatis veniam qui obcaecati facere maiores libero esse et
            consectetur officia iure in reprehenderit cumque architecto? Dicta
            numquam harum ea voluptatibus earum! Beatae praesentium vitae
            officia voluptates, quis dolorum cupiditate modi optio amet error,
            quaerat laborum autem quo consequatur! Quo inventore atque voluptate
            explicabo optio, consequuntur veniam nisi fuga eius, at corporis
            illo sed laborum? Fugit aliquam ratione quas molestias nihil,
            accusamus a ipsam molestiae consequuntur culpa commodi amet mollitia
            hic facere aliquid perspiciatis sint unde dignissimos dolores.
            Voluptas magnam vel corporis ipsum? Expedita culpa dolor voluptatem
            saepe, sunt architecto facilis vel esse iusto! Quasi totam dolorum
            itaque fugit! Aperiam laudantium esse nemo debitis laborum tempora,
            eligendi eum qui eaque asperiores magni facere perspiciatis,
            explicabo perferendis rem omnis cumque quos iusto! Hic est ad natus
            aut laboriosam exercitationem quaerat labore cupiditate beatae qui
            quod, unde voluptatem perspiciatis veritatis ab vel aliquam facilis
            ratione id corporis quisquam omnis cum deleniti nemo. Delectus error
            velit voluptatum quia earum! Impedit quam illum enim praesentium
            rerum laudantium accusamus, quod consequuntur suscipit possimus nemo
            dolorem ratione excepturi, exercitationem iure repudiandae quidem
            est quos vero! Ipsam, nam. Est earum hic ea nisi sequi fugit ducimus
            at nemo tenetur totam, nobis qui sint sunt cum vel architecto
            corporis id molestiae itaque sed odit repellat? Soluta sunt eum
            iusto mollitia, commodi reprehenderit rem dolore provident nihil,
            velit deleniti, nisi ea? Assumenda ipsa deleniti eligendi cumque? A
            ipsum mollitia molestiae minima, atque sunt quidem, non praesentium
            repudiandae sed obcaecati in eius laudantium, facere maxime ullam
            deleniti dolorem culpa quibusdam pariatur amet eaque tempora. Qui
            ullam unde doloribus quasi, magnam incidunt? Distinctio tempora
            minus vero? Illo autem dicta optio fugit quis suscipit magnam
            ducimus a inventore cupiditate labore sequi eius obcaecati nostrum
            rerum nam, esse, modi earum quae dolores ipsum qui consequatur ab!
            Perferendis non nostrum accusantium sapiente, nobis iste quisquam
            delectus fugiat nisi, doloremque esse. Pariatur autem, et excepturi
            fugiat ex quos ad cumque labore. Nulla, numquam rerum porro eaque
            voluptatem cupiditate fuga aliquid ipsam, excepturi, eos est
            distinctio repellat. Dignissimos obcaecati, illo, id quaerat alias
            rerum vel reiciendis eveniet nobis est assumenda neque sed
            recusandae atque saepe aliquid et omnis repudiandae quibusdam
            quidem, a quo harum tempore? Quae, corporis reiciendis quod nemo
            aliquid, at voluptas, consequatur dolore asperiores magni ipsam est.
            Minus natus tempora ipsam nam eaque dolorem nostrum ipsa voluptatum
            assumenda deleniti. Quas, unde? Modi est, veniam facere distinctio
            reiciendis accusantium pariatur, quidem quaerat sit fuga itaque! Ab
            voluptates modi maiores temporibus, voluptatibus libero, rem velit
            blanditiis consequuntur nemo, excepturi animi fuga pariatur amet! In
            praesentium enim dolore obcaecati quo aperiam aliquid repellat ipsam
            accusamus eius culpa, quam quidem veritatis officia recusandae
            suscipit vel ut magnam tenetur beatae, ducimus iste placeat magni?
            Earum recusandae accusamus, sed ipsum iusto ratione nesciunt saepe
            voluptatem nostrum quo. Quae voluptatem quos iste eos? Quis maiores
            hic repellendus vero nam. Consequuntur earum libero id eligendi,
            fugit sit iure corrupti deserunt minima numquam, quisquam, iste
            labore quibusdam debitis optio ut? Voluptate, modi omnis fugiat
            dolore nostrum ad perferendis dolor nemo aliquam distinctio hic
            recusandae at tenetur eaque soluta totam vel dignissimos pariatur
            inventore, vitae error nobis veniam possimus. Quae delectus aut et
            corrupti dolor ipsa aperiam iure, deleniti recusandae, ex incidunt,
            a temporibus voluptas. Ipsum odio necessitatibus, iure tenetur nihil
            corrupti delectus reiciendis minima quod adipisci ratione ex eius
            atque suscipit temporibus. Obcaecati, distinctio laboriosam. Quas,
            corporis. Magni pariatur expedita accusamus, libero perspiciatis
            voluptatum iure a qui quibusdam vel culpa molestias fugit cumque
            exercitationem ipsum. Esse nobis est eligendi natus obcaecati
            voluptatem dicta voluptatum commodi a quam tempora consectetur et
            omnis odit molestiae dolorum delectus rerum in temporibus error
            quibusdam, enim pariatur debitis. Dicta nemo sequi porro sed quo cum
            quas natus! Cupiditate nobis nam in sequi pariatur sapiente
            quibusdam fuga veniam dignissimos, aspernatur voluptas dolores
            similique sint earum. Optio eaque at eveniet voluptates, unde
            molestias. Nobis, doloremque! Quis quasi corrupti, minus ut ipsa
            optio?
          </p>
        </div>
        <div className=" m-4 flex justify-end">
          <button
            onClick={toggleContent}
            className=" border-2 rounded-md p-1 w-28 border-darkbl hover:bg-darkbl hover:text-white"
          >
            {isContentExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreContent;
