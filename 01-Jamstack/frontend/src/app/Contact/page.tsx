"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";

interface Feedback {
  id: number;
  attributes: {
    name: string;
    email: string;
    message: string;
    createdAt: string;
  };
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/feedbacks`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setFeedbacks(result.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, [success]); // Fetch feedbacks again if a new feedback is added

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const feedback = { name, email, message };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/feedbacks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: feedback }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccess("Votre message a été envoyé avec succès.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setError("Une erreur est survenue lors de l'envoi du message.");
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 p-6 sm:p-12">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Avis des Étudiants
          </h2>
          <ul className="space-y-4 mb-12">
            {feedbacks.length > 0 ? (
              feedbacks.map((feedback) => (
                <li key={feedback.id} className="border-t pt-4">
                  <h3 className="font-semibold text-lg">
                    {feedback.attributes.name}
                  </h3>
                  <p className="text-gray-700">{feedback.attributes.message}</p>
                  <p className="text-gray-500 text-sm">
                    Posté le{" "}
                    {new Date(
                      feedback.attributes.createdAt
                    ).toLocaleDateString()}
                  </p>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-600">
                Aucun avis pour le moment.
              </p>
            )}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-md mx-auto mt-8">
          <h1 className="text-xl font-bold text-blue-800 mb-4 text-center">
            Laissez un Avis
          </h1>
          {success && (
            <p className="text-green-600 mb-4 text-center font-semibold">
              {success}
            </p>
          )}
          {error && (
            <p className="text-red-600 mb-4 text-center font-semibold">
              {error}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-700 font-semibold mb-1"
              >
                Nom
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
