import supabase from "../components/supabase/supabase";

export async function saveGodScan(user_id, godScan_id, godScan_image_link, godScan_response) {

    const data = {
        user_id: user_id,
        godScan_image_link: godScan_image_link,
        godScan_response: godScan_response,
        godScan_id: godScan_id

    }

    console.log(data)

    const { error } = await supabase
    .from("godScan_history")
    .insert({
        "user_id": data.user_id,
        "godScan_id": data.godScan_id,
        "godScan_image_link": data.godScan_image_link,
        "godScan_response": data.godScan_response,
    });
    if(error){
        return { status: 400, message: error };
    }else{
        return { status: 201, message: "Created" };
    }
}