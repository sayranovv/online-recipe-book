<script setup lang="ts">
import RecipeInfo from '~/components/RecipeInfo.vue'
import { ChevronLeft, Heart } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeId = route.params.id

const { data: recipe } = useFetch(`https://a3a068e9218d71bf.mokky.dev/recipes/${recipeId}`)
</script>

<template>
  <div class="relative">
    <img
      src="@/assets/img/greek%20salad.jpg"
      alt=""
      class="relative h-[50dvh] w-full object-cover rounded-2xl"
    />
    <div class="w-11/12 mx-auto absolute left-1/2 -translate-x-1/2 top-8">
      <div class="flex justify-between">
        <Button class="bg-opacity-20 backdrop-blur-sm w-14 h-14 shadow-none rounded-full">
          <ChevronLeft class="!h-8 !w-8" />
        </Button>
        <Button class="bg-opacity-20 backdrop-blur-sm w-14 h-14 shadow-none rounded-full"
          ><Heart class="!h-8 !w-8"
        /></Button>
      </div>
    </div>
    <div class="sticky top-14 z-10">
      <RecipeInfo
        class="mx-auto w-11/12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        :recipe-name="recipe.title"
        :amount-of-ingredients="recipe.ingredients.length"
        :time-for-preparing="recipe.cooking_time"
        :amount-of-calories="recipe.calories"
        :amount-of-serve="recipe.servings"
      />
    </div>
    <div class="mx-auto mt-24">
      <section>
        <h2 class="text-2xl font-semibold">Ингредиенты</h2>
        <IngredientsSlider class="mt-5" :ingredients="recipe.ingredients" />
      </section>
      <section class="my-10">
        <h2 class="text-2xl font-semibold">Приготовление</h2>
        <p class="mt-5 bg-amber-50 py-5 px-6 rounded-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad at eos fuga illo in modi
          necessitatibus, nulla officiis reprehenderit totam. Accusantium beatae hic laborum quaerat
          rerum tempore veritatis! Deserunt dolorum explicabo, impedit magni modi nesciunt quisquam
          recusandae sapiente tempore voluptates. A ab accusamus animi at cum delectus dicta ea
          eligendi est, exercitationem expedita facilis hic illo ipsam labore, laborum molestiae non
          optio possimus quasi reiciendis repellat repellendus saepe sit suscipit velit vitae?
          Commodi corporis, dignissimos ducimus ipsam quis quo reprehenderit voluptate voluptatem? A
          alias amet debitis, deserunt dolore et in nemo non perferendis porro praesentium quas qui
          quos ratione soluta totam velit. A assumenda cumque explicabo ipsum praesentium quibusdam
          sequi? Accusamus adipisci, consectetur corporis, cupiditate distinctio dolorem ducimus
          esse incidunt iste, molestiae nihil quasi quidem sapiente tempora voluptates. A ab
          adipisci assumenda atque aut consequuntur cupiditate delectus dignissimos dolorem dolores
          ducimus eaque eos est fugit hic, illo inventore labore laudantium minima modi neque nihil
          nostrum numquam odio porro possimus quae qui quibusdam quisquam repellat temporibus totam
          ullam velit veritatis voluptas voluptatem voluptatum. Eaque eveniet placeat recusandae! Ab
          aliquam amet asperiores aspernatur at beatae deserunt dignissimos doloremque dolores earum
          enim est ex explicabo facere illo illum incidunt iusto laboriosam nam nihil nobis, numquam
          odio optio perspiciatis quam quasi quo quos rem rerum sunt unde veritatis voluptatibus
          voluptatum? Aut corporis dolorem eveniet explicabo ipsam non porro quisquam suscipit
          voluptate voluptatibus? Adipisci, deleniti ducimus error eum fuga hic odit sapiente velit.
          Ab asperiores consectetur dolorum eligendi error in ipsa ipsum iste iusto labore maiores
          modi nesciunt nulla numquam odio odit omnis quis quisquam saepe sapiente, temporibus ullam
          veritatis. Accusamus aspernatur dicta laborum odio repellendus repudiandae rerum sequi
          voluptatum! Consectetur debitis deleniti ducimus eius, illo illum modi molestias nobis
          numquam perferendis quasi sequi tempore tenetur, totam voluptates. Delectus dicta, ipsum
          magnam minima necessitatibus placeat quasi quos sequi suscipit vitae. Asperiores error hic
          maxime nemo quisquam rem ut. Accusantium architecto autem dolores illum minima modi
          possimus quaerat ullam? Animi culpa error ex fugiat itaque neque, nostrum numquam officiis
          quae recusandae, rerum sapiente voluptatem voluptates? Accusantium, assumenda deserunt
          dolor enim est fugiat voluptatum! Ab, accusantium aliquid at, atque beatae consectetur
          consequuntur deleniti distinctio esse et explicabo facilis fuga fugiat hic ipsa ipsum
          molestiae nisi, quo suscipit tempora totam vel vero. Dignissimos dolor recusandae sint
          voluptas voluptates. Ad aliquam at culpa error illo labore minus necessitatibus nesciunt
          obcaecati officiis provident quo reiciendis sit, vel veritatis. Ad consectetur cum est
          excepturi fugiat iste nam officia provident quia, quos rem, soluta suscipit. Ab commodi
          consectetur eos error explicabo, incidunt ipsam recusandae reprehenderit tempore
          voluptatibus. Aut eligendi facilis officiis rerum sit unde vero! Debitis, est, quidem!
          Aperiam distinctio eum illo impedit laboriosam maxime, officia. Aut doloremque fugiat
          impedit in incidunt laboriosam maiores optio sequi voluptate voluptates. Beatae ducimus
          nulla pariatur perferendis quam tenetur, veniam! Assumenda consectetur dolorum eveniet
          ipsam quidem tempore vitae. Amet at blanditiis, commodi consequuntur culpa delectus
          dignissimos eaque eius ex iure laboriosam magnam maxime neque provident quia repellat
          repellendus suscipit ullam voluptate voluptatum! A aliquid architecto, at autem
          consequuntur cum deleniti deserunt enim eos error fugit id iure iusto labore laudantium
          libero, maxime modi natus necessitatibus nihil nisi odio placeat provident quae qui quis
          quo quos repudiandae sunt tempora totam ut velit voluptatum? A aliquid cumque eius fugiat,
          molestiae officiis quod repellendus repudiandae suscipit, totam unde voluptatem! A amet
          at, facere illo minus veniam voluptatum. Asperiores eligendi eos et impedit iusto maiores
          nisi quam. Consequuntur in, sed! A accusamus accusantium adipisci animi aperiam,
          aspernatur consectetur delectus deserunt dolores error eum ex expedita fugiat ipsa ipsam
          ipsum iure laboriosam laudantium maiores nam nemo nihil quia quis quo reprehenderit sequi
          similique ullam vel velit vero? Accusantium adipisci, aliquid animi aperiam blanditiis cum
          doloribus earum enim eum iure iusto laboriosam mollitia nam natus necessitatibus nemo,
          numquam obcaecati omnis quae quo rerum sed sit tempora veniam, voluptate? Aut corporis
          culpa, distinctio eveniet ex harum necessitatibus, nihil odio officiis quae qui quia,
          quibusdam recusandae tempore vel. Atque aut, cumque eaque earum eos fugiat fugit maiores
          optio, quaerat quis quod recusandae, saepe sapiente similique tenetur velit veniam. A eius
          ex facere itaque laudantium obcaecati quia quod, recusandae repellat sit totam velit?
          Assumenda culpa, eos ipsa molestias rem saepe vel voluptate. Esse ex impedit iste minima
          natus necessitatibus non obcaecati officia quam qui quo repudiandae, unde? Animi
          aspernatur, atque delectus dolorum ea, expedita iure laboriosam nesciunt nisi quaerat
          quisquam repellat repudiandae veniam vitae voluptas! A aliquid aperiam assumenda cum
          cumque, debitis distinctio dolore doloribus earum eos error eum eveniet illo ipsum iusto
          maiores, minima mollitia nemo omnis quasi quisquam sapiente sed sunt tempora tenetur
          voluptatem voluptatibus? Aliquam animi, asperiores ea explicabo iste possimus provident
          quos veritatis. A, accusantium ducimus facere facilis fugiat iure nemo neque quia ratione
          sapiente. Ab earum eum facere, fugit, molestias nesciunt, non numquam omnis perspiciatis
          quas soluta unde vel? A assumenda cum cumque debitis dolorem esse fuga fugit id iusto
          libero nostrum numquam optio totam, ullam voluptates? Alias dicta distinctio error in
          nihil odit quis recusandae tenetur totam voluptatum. Animi deleniti eveniet ex id ipsam
          quis quisquam totam velit voluptatibus voluptatum. A ad adipisci alias amet deserunt
          dolore doloribus ducimus eos ex incidunt ipsa ipsum libero nobis non odit officiis optio,
          quas quasi qui quos, ratione reprehenderit sed similique tempore veniam voluptas
          voluptatibus voluptatum? Accusantium aliquid asperiores consectetur consequatur
          dignissimos, distinctio dolore minus optio porro, quasi sit suscipit voluptate. Eius enim,
          eveniet fugiat iusto laborum quisquam quos reprehenderit ullam. Animi autem dolores, ea
          enim eum excepturi fugiat illum in, inventore magni maiores natus necessitatibus nesciunt
          odio possimus quos repellendus voluptates. Doloremque eius eum harum hic illo laborum,
          magnam natus tempora! Adipisci aliquid, aut, corporis culpa cum doloremque ea, earum enim
          eveniet harum laudantium porro quaerat rerum sint tempora vel voluptatem. Accusamus
          accusantium amet animi assumenda at, autem blanditiis commodi consequatur dolorem
          doloribus, dolorum eveniet ipsum iste nulla odio repellat ut veniam voluptatem! Aperiam
          cum cupiditate, dignissimos error quasi reprehenderit voluptate voluptatibus. Earum, illo
          reprehenderit. Aliquam assumenda deserunt, doloremque dolores excepturi, laborum placeat
          possimus quo ratione recusandae reiciendis totam, vel veniam?
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
