
<script setup lang="ts">
    var message = ref('')
    const runtimeConfig = useRuntimeConfig()
    var host2 = runtimeConfig.public.SERVER;

    import type { FormSubmitEvent } from '#ui/types'


    async function onSubmit(event: FormSubmitEvent<any>) {
        // Do something with data
            //console.log(data)
            //form.append("number", "123");
        //[message.value[0], message.value[1], message.value[2], message.value[3], message.value[4]]
        var aaa = message.value.split(",");
        console.log(aaa)

            console.log([message].length)
        var res = await $fetch(host2 +'/post/mas', {
            method: 'POST',
            /*headers: {
                "Content-Type": "form-data",
                "processData": false
            },*/
            body: aaa
          })

        alert("Вы ввели " + res);
        location.reload()
        message.value = ('')
        focus(form)
    }
    


</script>
  <template>
        <body>
            <div>
                <UForm @submit="onSubmit" >
                    <div class="width-500">
                        <UInput v-model="message" placeholder="Введите числа через запятую" pattern="[0-9,.]*"/>
                        <br />
                        <UButton label="Отправить" variant="solid" color="blue" type="submit"> </UButton>
                    </div>
                </UForm>
            </div>
        </body>
  </template>
<style>
    .width-500 {
        width: 250px;
        margin: 0 auto;
        text-align: center;
        margin-top: 20em;
    }
</style>
