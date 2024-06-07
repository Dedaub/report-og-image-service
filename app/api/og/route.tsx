import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export async function GET(request: NextRequest) {
  // const regularFont = await fetch(
  //   'https://fonts.gstatic.com/s/bevietnampro/v11/QdVPSTAyLFyeg_IDWvOJmVES_Hw3BXoYZ7Aj.woff2'
  // ).then((res) => res.arrayBuffer());

  console.log('Request:', request.nextUrl.searchParams);
  const summary = request.nextUrl.searchParams.get('summary');
  const description = request.nextUrl.searchParams.get('description');
  const logo = request.nextUrl.searchParams.get('logo');
  const bgLink = `https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v4/${encodeURIComponent(
    summary ?? ''
  )}/${encodeURIComponent(description ?? '')}/${encodeURIComponent(
    logo ?? ''
  )}/og.png`;
  console.log('bgLink:', bgLink);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: 'BeVietnamPro',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            zIndex: -1,
          }}
        >
          <img
            style={{
              width: '1200px',
              height: '630px',
            }}
            src={bgLink}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: -20,
            right: 30,
            display: 'flex',
            // zIndex: 1000,
          }}
        >
          <img
            style={{
              width: 250,
              height: 140,
            }}
            src='https://miro.medium.com/v2/resize:fit:320/1*giCqJiPmOC5sjfDf8FXaag.png'
          ></img>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
