<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup>
const qurery = gql`
query Characters{
  characters {
    results {
      name
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