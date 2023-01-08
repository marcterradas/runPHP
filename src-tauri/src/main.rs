#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn execute_php(input: &str) -> String {
    use std::process::{Output, Command};
    use std::str;
    
    let output: Output = Command::new("php")
    .args(["-r", input])
    .output()
    .expect("failed to execute process");

    let hello: Vec<u8> = output.stdout;
    let s: String = String::from(str::from_utf8(&hello).unwrap());

    return s;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![execute_php])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
