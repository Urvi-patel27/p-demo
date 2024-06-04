import React from "react";
import useScroll from "../../customHooks/useScroll";

function UseEffectScrollDemo() {
  const { scroll, scrollToTop } = useScroll();
  return (
    <div>
      {scroll > 500 && (
        <button
          style={{
            padding: "8px",
            position: "fixed",
            right: "50px",
            bottom: "50px",
          }}
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, autem
        omnis natus odit id accusamus. Alias impedit quo illum natus enim?
        Minima sapiente animi voluptatum autem voluptatibus consequatur
        accusantium aut quas magnam, rerum porro eius repellat perferendis
        debitis reiciendis illo recusandae eos at ea rem, nisi non nam eligendi
        maxime. Obcaecati hic nisi exercitationem at corporis maiores, laborum
        minima eligendi minus! Eos ab ut commodi eaque! Quia ullam asperiores
        ratione reprehenderit dolores accusantium ipsum commodi eos praesentium
        repellat, nisi nihil aliquid dicta sed distinctio ducimus nesciunt
        repellendus quae expedita ea animi nemo at nam? Recusandae eos
        blanditiis accusamus repudiandae! Sapiente distinctio quod quasi
        cupiditate quidem rerum iusto quis quia illo laudantium voluptates
        similique saepe laborum dicta at, numquam nostrum placeat consequatur
        sint! Odit mollitia atque velit porro adipisci tempora, numquam optio
        delectus dignissimos iure magnam laborum deserunt aperiam suscipit
        labore. Quo hic voluptates doloribus enim animi, omnis, rem numquam
        aspernatur distinctio ad consectetur odio dolore provident quisquam
        accusantium possimus? Quam exercitationem officiis accusantium quibusdam
        commodi incidunt animi veritatis eos ipsa eius! Praesentium, eum
        quibusdam quos at accusamus sint non iste rem perspiciatis nihil? Culpa
        dignissimos nemo vero maxime, quam itaque illo placeat dolorum sunt?
        Fugiat voluptatem nisi perspiciatis, nihil est, consequuntur autem
        asperiores eveniet eius ipsum sapiente nam iure nobis magni? Maiores
        dicta quis atque molestiae, quam ut nisi veritatis sint eos perferendis,
        eveniet debitis illo aperiam et iste nihil omnis, ratione fugit. Alias
        excepturi totam molestiae, nesciunt nam repudiandae ducimus ea eaque
        atque odio non veniam commodi similique fuga quae officia possimus animi
        distinctio facilis ipsa explicabo aperiam magni quos hic. Qui
        accusantium corporis maxime in iusto maiores, suscipit commodi tenetur
        totam odit magni laborum laboriosam, ducimus voluptas nemo nobis labore
        voluptates culpa, vitae dolorem at dolores! Soluta velit, illo maxime
        tempora vero eaque rem magni doloribus autem hic nam reiciendis
        blanditiis quisquam, repellat fuga molestiae corporis, adipisci ipsum!
        Ex illo dignissimos, porro tempore est vitae officia, voluptatibus
        cumque labore eos saepe libero tempora totam similique in omnis
        voluptatem eum. Velit laudantium dignissimos nihil reiciendis modi odio
        voluptatem quam, eius placeat tempora rerum esse voluptate enim deserunt
        quidem autem eum tempore quia nesciunt pariatur sequi fugit. Optio
        quaerat voluptatem harum consequatur ad maiores velit libero, aperiam
        veritatis! Hic debitis est rerum eveniet earum quas corrupti dolor
        dolore nemo fugit dignissimos, vitae placeat reiciendis deleniti
        laboriosam. Vero nobis harum voluptas beatae. Corrupti, possimus totam
        vitae nobis enim mollitia nostrum, libero doloribus maiores voluptate
        nam sed molestias iure veritatis eius, harum nihil dignissimos fugit
        ratione. Voluptatum harum architecto inventore fugit expedita enim.
        Earum omnis animi voluptas asperiores adipisci, quaerat ab error beatae
        tenetur laboriosam eum perspiciatis eos eaque accusantium corrupti
        mollitia commodi ullam porro quia odit voluptatem sequi possimus velit!
        Veritatis quidem praesentium aliquid sequi odit. Esse possimus nostrum
        molestias expedita alias fuga, placeat veniam vel quos pariatur cumque
        fugit sunt odit hic cum ab incidunt blanditiis cupiditate, quis aperiam
        ipsum praesentium! Molestias consequatur similique odit, beatae sapiente
        asperiores officia provident necessitatibus laboriosam, culpa
        reprehenderit rem at corrupti voluptas eum ex.
      </p>
    </div>
  );
}

export default UseEffectScrollDemo;
