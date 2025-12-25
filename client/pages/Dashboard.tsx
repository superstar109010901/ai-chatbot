import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchChatbots,
  createChatbot,
  deleteChatbot,
  updateChatbot,
  clearError,
} from "../store/slices/chatbotSlice";
import { toast } from "@/components/ui/use-toast";
import { Plus, Trash2, Edit2, Copy, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Header from "@/components/Header";
import { CreateChatbotData } from "../services/api";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { chatbots, isLoading, error } = useAppSelector((state) => state.chatbot);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteChatbotId, setDeleteChatbotId] = useState<string | null>(null);
  const [editingChatbot, setEditingChatbot] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreateChatbotData>({
    name: "",
    widgetSettings: {
      primaryColor: "#007bff",
      greetingMessage: "Hello! How can I help you today?",
      position: "bottom-right",
      showAvatar: true,
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchChatbots());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleCreateChatbot = async () => {
    if (!formData.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Please enter a chatbot name",
        variant: "destructive",
      });
      return;
    }

    try {
      await dispatch(createChatbot(formData)).unwrap();
      toast({
        title: "Success",
        description: "Chatbot created successfully!",
      });
      setIsCreateDialogOpen(false);
      setFormData({
        name: "",
        widgetSettings: {
          primaryColor: "#007bff",
          greetingMessage: "Hello! How can I help you today?",
          position: "bottom-right",
          showAvatar: true,
        },
      });
    } catch (err) {
      // Error handled by useEffect
    }
  };

  const handleDeleteChatbot = async () => {
    if (!deleteChatbotId) return;

    try {
      await dispatch(deleteChatbot(deleteChatbotId)).unwrap();
      toast({
        title: "Success",
        description: "Chatbot deleted successfully!",
      });
      setIsDeleteDialogOpen(false);
      setDeleteChatbotId(null);
    } catch (err) {
      // Error handled by useEffect
    }
  };

  const handleToggleActive = async (chatbot: any) => {
    try {
      await dispatch(
        updateChatbot({
          id: chatbot._id,
          data: { isActive: !chatbot.isActive },
        })
      ).unwrap();
      toast({
        title: "Success",
        description: `Chatbot ${chatbot.isActive ? "deactivated" : "activated"} successfully!`,
      });
    } catch (err) {
      // Error handled by useEffect
    }
  };

  const copyEmbedCode = (embedCode: string) => {
    const widgetUrl = `${window.location.origin}/widget/script/${embedCode}.js`;
    navigator.clipboard.writeText(`<script src="${widgetUrl}"></script>`);
    setCopiedId(embedCode);
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard",
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please sign in to access the dashboard</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Chatbots</h1>
            <p className="text-muted-foreground mt-2">
              Manage your AI chatbots and embed them on your website
            </p>
          </div>
          <Button
            onClick={() => setIsCreateDialogOpen(true)}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create Chatbot
          </Button>
        </div>

        {isLoading && chatbots.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Loading chatbots...</p>
          </div>
        ) : chatbots.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground mb-4">No chatbots yet</p>
            <Button onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Chatbot
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chatbots.map((chatbot) => (
              <div
                key={chatbot._id}
                className="border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {chatbot.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Created {new Date(chatbot.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        chatbot.isActive
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {chatbot.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Embed Code</Label>
                    <div className="flex items-center gap-2 mt-1">
                      <code className="flex-1 text-xs bg-muted px-2 py-1 rounded truncate">
                        {chatbot.embedCode}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyEmbedCode(chatbot.embedCode)}
                        className="flex-shrink-0"
                      >
                        {copiedId === chatbot.embedCode ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleToggleActive(chatbot)}
                      className="flex-1"
                    >
                      {chatbot.isActive ? (
                        <>
                          <X className="h-4 w-4 mr-2" />
                          Deactivate
                        </>
                      ) : (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Activate
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setDeleteChatbotId(chatbot._id);
                        setIsDeleteDialogOpen(true);
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Chatbot</DialogTitle>
            <DialogDescription>
              Create a new AI chatbot for your website
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Chatbot Name</Label>
              <Input
                id="name"
                placeholder="My AI Assistant"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCreateChatbot} disabled={isLoading}>
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the chatbot
              and all its data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteChatbotId(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteChatbot}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

