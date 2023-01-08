import { invoke } from '@tauri-apps/api/tauri'

export async function executePHPCode(input: string): Promise<string> {
    let result: string = await invoke('execute_php', { input })
    return result
}
