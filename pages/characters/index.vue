<template>
  <div class="flex flex-wrap">
    <CharacterCard v-for="{name, id, status, image, species, location} in data.characters.results"
    :key="id"
    :name="name"
    :id="id"
    :status="status"
    :image="image"
    :species="species"
    :location="location.name"
    />
  </div>
</template>

<script setup>

const qurery = gql`
query getCharacters{
  characters {
    results {
      name
      id
      status
      image
      species
      location{
        name
      }
    }
  }
}
`

const {data} = useAsyncQuery(qurery);
</script>