export async function requestWithEmail(targetId, email) {
  let endpoint = process.env.NEXT_PUBLIC_API_ROUTE + "api/otp/new";
  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid: targetId, email }),
    });
    if (!response.ok) {
      throw new Error(`Network response for ${endpoint} not okay.`);
    }
    return { status: "ok", body: await response.json() };
  } catch (error) {
    return { status: "error", body: error };
  }
}

export async function requestWithOtp(token, otp) {
  let endpoint = process.env.NEXT_PUBLIC_API_ROUTE + "api/otp/verify";
  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ otp }),
    });
    if (!response.ok) {
      throw new Error(`Network response for ${endpoint} not okay.`);
    }
    return { status: "ok", body: await response.json() };
  } catch (error) {
    return { status: "error", body: error };
  }
}
