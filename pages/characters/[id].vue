<template>
  <CharacterCard
  :name="data.character.name"
  :id="data.character.id"
  :status="data.character.status"
  :image="data.character.image"
  :species="data.character.species"
  :location="data.character.location.name"
  />
</template>

<script setup>
const route = useRoute();

const query = gql`
query gerCharacter{
character(id: ${route.params.id}){
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
`
const { data } = await useAsyncQuery(query)
</script>