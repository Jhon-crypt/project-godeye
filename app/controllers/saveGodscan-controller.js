import supabase from "../components/supabase/supabase";

export async function saveGodScan() {
    const { error } = await supabase
    .from("godScan_history")
    .insert({
        "godScan_image_link": "testimage.com",
        "godScan_response": "My response oooo",
    });
    if(error){
        return { status: 400, message: "Could not save" };
    }else{
        return { status: 201, message: "Created" };
    }
}